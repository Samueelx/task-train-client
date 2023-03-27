import Todo from "./Todo";

interface Todo {
    id: number;
    uid: string;
    brand: string;
    equipment: string
  }

export default function Todos({todos}:any) {
    const items = todos.map((todo:Todo) => {
        return <Todo brand={todo.brand} equipment={todo.equipment} key={todo.id}/>
    })
    return (
        <>
        <ul>
            {items}
        </ul>
        </>
    );
}