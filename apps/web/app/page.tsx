import { loadData } from "../utils/loadData";



export default async function Page() {
  await loadData();
  return (
    <h1 className="text-3xl font-bold underline text-red-600">
      Hello world!
    </h1>
  );
}
