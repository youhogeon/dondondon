import { createRef, forwardRef, memo, useImperativeHandle, useRef } from 'react'

import HotTable, { HotTableProps } from '@handsontable/react'
import Handsontable from 'handsontable'
import { CellChange, ChangeSource } from 'handsontable/common'
import { DetailedSettings } from 'handsontable/plugins/nestedHeaders'
import { registerAllModules } from 'handsontable/registry'
import { ColumnSettings } from 'handsontable/settings'
import { HyperFormula } from 'hyperformula'

import 'handsontable/dist/handsontable.full.min.css'

registerAllModules()

interface Column {
    name: string;
    key: string;
}

interface NestedColumns {
    name: string;
    children?: Array<string | Column>;
}

interface HandsonTableProps {
    columns: string[] | NestedColumns[],
    rows: string[];

    fullWidth?: boolean;

    columnsInfo?: ColumnSettings[];

    onChange?: (changes: CellChange[], source: ChangeSource) => void;
}

const convertNestedColumns = (columns: NestedColumns[]): [DetailedSettings[], string[], string[]] => {
    const superColumns: DetailedSettings[] = []
    const subColumns: string[] = []
    const keys: string[] = []

    columns.forEach(column => {
        if (!column.children) {
            superColumns.push({
                label: '',
                colspan: 1
            })

            subColumns.push(column.name)
            keys.push(column.name)

            return
        }

        superColumns.push({
            label: column.name,
            colspan: column.children.length
        })

        column.children.forEach(child => {
            if (typeof child === 'string') {
                subColumns.push(child)
                keys.push(child)
            } else {
                subColumns.push(child.name)
                keys.push(child.key)
            }
        })
    })

    return [superColumns, subColumns, keys]
}

const convertColumnsInfo = (keys: string[]): ColumnSettings[] => {
    const columnsInfo: ColumnSettings[] = []
    keys.forEach(key => {
        columnsInfo.push({
            data: key,
            type: 'numeric',
            numericFormat: {
                pattern: '0,0',
            }
        })
    })

    return columnsInfo
}

interface HandsonTableRef {
    data: object[];
    hot: Handsontable | null;
}

const HandsonTable = (props: HandsonTableProps, ref: React.Ref<HandsonTableRef>) => {
    const hotRef = createRef<HotTable>()

    const initialData: object[] = []
    const data = useRef(initialData)

    for (let i = 0; i < props.rows.length; i++) {
        initialData.push({})
    }

    useImperativeHandle(ref, () => ({
        get data() {
            return data.current
        },
        get hot() {
            const instance = hotRef.current?.hotInstance

            return instance || null
        }
    }))

    const afterChange = (changes: CellChange[] | null, source: ChangeSource) => {
        if (!changes || source === 'loadData') return

        props.onChange && props.onChange(changes, source)
    }

    const hyperformulaInstance = HyperFormula.buildEmpty({
        licenseKey: 'internal-use-in-handsontable',
    })

    const settings: HotTableProps = {
        rowHeaders: props.rows,
        data: data.current,
        height: 'auto',
        stretchH: props.fullWidth ? 'all' : 'none',
        licenseKey: 'non-commercial-and-evaluation',

        formulas: {
            engine: hyperformulaInstance,
        },

        afterChange,
    }

    if (props.columns.length && typeof props.columns[0] === 'object') { //for nested headers
        const converted = convertNestedColumns(props.columns as NestedColumns[])

        settings.nestedHeaders = [converted[0], converted[1]]
        settings.colHeaders = true
        settings.columns = props.columnsInfo || convertColumnsInfo(converted[2])
    } else { //for 1-level headers
        const columns = props.columns as string[]

        settings.colHeaders = columns
        settings.columns = props.columnsInfo || convertColumnsInfo(columns)
    }


    return (
        <HotTable
            ref={hotRef}
            {...settings}
        ></HotTable>
    )
}

export type { HandsonTableRef }
export default memo(forwardRef(HandsonTable))