import { createRef, forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

import HotTable, { HotTableProps } from '@handsontable/react'
import { DetailedSettings } from 'handsontable/plugins/nestedHeaders'
import { registerAllModules } from 'handsontable/registry'
import { ColumnSettings } from 'handsontable/settings'

import 'handsontable/dist/handsontable.full.min.css'

registerAllModules()

interface NestedColumns {
    name: string;
    children?: string[];
}

interface HandsonTableProps {
    columns: string[] | NestedColumns[],
    rows: string[];

    columnsInfo?: ColumnSettings[];
}

const convertNestedColumns = (columns: NestedColumns[]): [DetailedSettings[], string[]] => {
    const superColumns: DetailedSettings[] = []
    const subColumns: string[] = []

    columns.forEach(column => {
        if (!column.children) {
            superColumns.push({
                label: '',
                colspan: 1
            })

            subColumns.push(column.name)

            return
        }

        superColumns.push({
            label: column.name,
            colspan: column.children.length
        })

        subColumns.push(...column.children)
    })

    return [superColumns, subColumns]
}

const convertColumnsInfo = (columns: string[]): ColumnSettings[] => {
    const columnsInfo: ColumnSettings[] = []
    columns.forEach(column => {
        columnsInfo.push({
            data: column,
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
    hot: HotTable | null;
}

const HandsonTable = (props: HandsonTableProps, ref: React.Ref<HandsonTableRef>) => {
    const hotRef = createRef<HotTable>()

    const initialData = useMemo(() => {
        const data: object[] = []

        for (let i = 0; i < props.rows.length; i++) {
            data.push({})
        }

        return data
    }, [props.rows])

    const data = useRef(initialData)

    useImperativeHandle(ref, () => ({
        get data() {
            return data.current
        },
        get hot() {
            return hotRef.current
        }
    }))

    const settings: HotTableProps = {
        rowHeaders: props.rows,
        data: data.current,
        height: 'auto',
        licenseKey: 'non-commercial-and-evaluation'
    }

    const columns: string[] = []

    if (props.columns.length && typeof props.columns[0] === 'object') { //for nested headers
        const converted = convertNestedColumns(props.columns as NestedColumns[])

        settings.nestedHeaders = converted
        settings.colHeaders = true
        columns.push(...converted[1])
    } else {
        settings.colHeaders = props.columns as string[]
        columns.push(...settings.colHeaders)
    }

    settings.columns = props.columnsInfo || convertColumnsInfo(columns)

    return (
        <HotTable
            ref={hotRef}
            {...settings}
        ></HotTable>
    )
}

export type { HandsonTableRef }
export default forwardRef(HandsonTable)