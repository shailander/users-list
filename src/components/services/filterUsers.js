function filterUsers(usersList, keyword) {
  var re = new RegExp(keyword, "i");

  const filterUsers = usersList.filter(
    (item) => (item["first_name"] + " " + item["last_name"]).match(re) !== null
  );
  return filterUsers;
}

export default filterUsers;
