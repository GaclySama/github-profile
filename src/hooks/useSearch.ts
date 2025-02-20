import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces/interfaces";
import { Formatter } from "../config/helpers/Formatter";
import { getUsersByName } from "../actions/get-users-by-name";

export const useSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [showUsers, setShowUsers] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setShowUsers(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = Formatter.notLongSpaces(target.value).trimStart();
    const newValue = value.length > 25 ? value.slice(0, 25) : value;
    setInputValue(newValue);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue.length < 3) return;
    try {
      const usersFinded = await getUsersByName(trimmedValue);
      setUsers(usersFinded);
      setShowUsers(true);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  return {
    // Properties
    inputValue,
    searchContainerRef,
    showUsers,
    users,

    // Methods
    handleChange,
    handleSubmit,
    setShowUsers,
  };
};
