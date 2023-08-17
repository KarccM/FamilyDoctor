import React from "react"
import Table from '../../components/table';
import TableLayout from "../../layouts/TableLayout";
import { tableColumns } from './data';

export default function Symptoms({ params, ...rest }) {
  const columns = React.useMemo(() => tableColumns, []);
  // const client = useClient();
  // let fetchDataOptions = readQueryParams()
  // fetchDataOptions = { ...fetchDataOptions, ...params };
  // const { data: settings, isLoading } = useQuery(
  //   [config.queryClient.list, fetchDataOptions],
  //   () => client(`${config.url}?${queryString.stringify(fetchDataOptions)}`),
  //   {
  //     keepPreviousData: true,
  //     onError: () => {
  //       errorWithCustomMessage("failed_with_reload_msg");
  //     },
  //   }
  // );
  let data = [
    { name: 'حرارة', question: 'هل تعاني من ارتفاع في الحرارة ', answers: ['نعم', 'لا'] },
    { name: 'وجع في رأس المعدة', question: 'هل تعاني من الم او وخزة في قسم العلوي من المعدة ', answers: ['نعم', 'لا'] },
    { name: 'دوخة', question: 'هل تشعر بالدوران ', answers: ['نعم', 'لا'] },
  ]
  let table = <Table
    columns={columns}
    tableData={data}
    isLoading={false}
    isToolbar={false}
  />

  return (
    <TableLayout table={table} {...rest} />
  );
}
