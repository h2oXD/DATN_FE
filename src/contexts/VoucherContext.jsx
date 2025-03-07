import { createContext, useContext, useState } from "react";

// Tạo Context
const VoucherContext = createContext();

// Hook để sử dụng context dễ dàng
export const useVoucher = () => {
  return useContext(VoucherContext);
};

// Provider để bọc ứng dụng
export const VoucherProvider = ({ children }) => {
  const [selectedVoucher, setSelectedVoucher] = useState(null); // Lưu mã giảm giá đã chọn

  // Hàm áp dụng voucher
  const applyVoucher = (voucher) => {
    setSelectedVoucher(voucher);
  };

  // Hàm xóa voucher
  const removeVoucher = () => {
    setSelectedVoucher(null);
  };

  return (
    <VoucherContext.Provider
      value={{ selectedVoucher, applyVoucher, removeVoucher }}
    >
      {children}
    </VoucherContext.Provider>
  );
};
