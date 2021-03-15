import React from "react";
import HomePageLogic from "./homePageLogic";
import SearchBar from "../searchBar/searchBar";
import UserTable from "../userTable/userTable";
import Pagination from "../pagination/pagination";
import PopupModal from "../popupModal/popupModal";

function Homepage(props) {
  const {
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
  } = HomePageLogic();

  return (
    <>
      {isModalVisible && (
        <PopupModal
          setIsModalVisible={setIsModalVisible}
          selectedUser={selectedUser}
        />
      )}
      <SearchBar
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />
      <UserTable
        users={users}
        setIsModalVisible={setIsModalVisible}
        setSelectedUser={setSelectedUser}
      />
      <Pagination
        users={users}
        userPerPage={userPerPage}
        currentPage={currentPage}
        handleGetUsers={handleGetUsers}
        filteredTotal={filteredTotal}
        searchValue={searchValue}
      />
    </>
  );
}

export default Homepage;
