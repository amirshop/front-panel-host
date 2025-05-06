import { TableColumn } from 'ant-design-vue'
import {
  TableFilterDataTypeEnum,
  TableFilterOperatorBooleanEnum,
  TableFilterOperatorDateEnum,
  TableFilterOperatorNumberEnum,
  TableFilterOperatorStringEnum,
} from '../enums'
import type { ColumnType } from 'ant-design-vue/es/table'

export interface Filter {
  field: ColumnType['key']
  dataType: TableFilterDataTypeEnum
  operator:
    | TableFilterOperatorDateEnum
    | TableFilterOperatorBooleanEnum
    | TableFilterOperatorStringEnum
    | TableFilterOperatorNumberEnum
  criteria: unknown // اینجا هر نوع داده‌ای می‌تواند باشد
}
