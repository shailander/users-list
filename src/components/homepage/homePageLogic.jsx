import { useState, useEffect } from "react";
import getUsers from "../services/httpService";
import filterUsers from "../services/filterUsers";

function HomePageLogic(props) {
  const [totalUsers, setTotalUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [filteredTotal, setFilteredTotal] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const userPerPage = 4;

  useEffect(() => {
    (async () => {
      const { list, total } = await getUsers(1, userPerPage);
      setUsers(list);
      setTotal(total);
      setFilteredTotal(total);
      setTotalUsers(list);
    })();
  }, []);

  const handleGetUsers = async (pageNo = 1, searchQuery = "") => {
    if (pageNo * userPerPage <= totalUsers.length) {
      const searchFilteredUsers = filterUsers(totalUsers, searchQuery);
      const userList = searchFilteredUsers.slice(
        (pageNo - 1) * userPerPage,
        (pageNo - 1) * userPerPage + userPerPage
      );
      setUsers(userList);
      setCurrentPage(pageNo);
      setFilteredTotal(searchQuery ? searchFilteredUsers.length : total);
      return;
    }
    const { list, total: userCount } = await getUsers(pageNo, userPerPage);
    setUsers(list);
    setFilteredTotal(userCount);
    if (pageNo !== currentPage) setCurrentPage(pageNo);

    setTotalUsers([...totalUsers, ...list]);
  };

  const handleSearchChange = ({ target }) => {
    setSearchValue(target.value);
    setCurrentPage(1);
    handleGetUsers(1, target.value);
  };

  return {
    users,
    userPerPage,
    filteredTotal,
    searchValue,
    currentPage,
    handleGetUsers,
    handleSearchChange,
    isModalVisible,
    setIsModalVisible,
    selectedUser,
    setSelectedUser,
  };
}

export default HomePageLogic;
