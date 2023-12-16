const formatNumber = (total) => {
  let amount = total.toLocaleString("en-IN");

  amount = `₹ ${amount}`;

  return amount;
};

export default formatNumber;
