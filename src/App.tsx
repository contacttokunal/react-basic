import { useState } from "react";
import ExpenseList from "./components/expense-tracker/ExpenseList";
import ExpanseFilter from "./components/expense-tracker/ExpanseFilter";
import ExpenseForm from "./components/expense-tracker/ExpenseForm";
import categories from "./components/expense-tracker/categories";

const App = () => {
  const [selectedCategroy, setSeelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "abc", amount: 10, category: "Groceries" },
    { id: 3, description: "acc", amount: 10, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategroy
    ? expenses.filter((e) => e.category === selectedCategroy)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpanseFilter
          onSelectCategory={(category) => setSeelectedCategory(category)}
        />
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      </div>
    </div>
  );
};

export default App;
