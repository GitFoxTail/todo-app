import { getData } from "@/actions/todoAction";
import Todos from "@/components/todos";
import TableView from "@/components/tableView";

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <Todos todos={data} />
      <TableView />
    </div>
    );
}
