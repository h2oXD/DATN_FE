import { createContext, useContext, useEffect, useState } from "react";

// Tạo Context
const VoucherContext = createContext();

// Hook để sử dụng context dễ dàng
export const useVoucher = () => {
  return useContext(VoucherContext);
};

// Provider để bọc ứng dụng
export const VoucherProvider = ({ children }) => {
  const [vouchers, setVouchers] = useState({});
  const [selectedVouchers, setSelectedVouchers] = useState({});

  // Khi mount, lấy lại từ localStorage
  useEffect(() => {
    const storedVouchers = localStorage.getItem("vouchers");
    if (storedVouchers) {
      setVouchers(JSON.parse(storedVouchers));
    }

    const storedSelectedVouchers = localStorage.getItem("selectedVouchers");
    if (storedSelectedVouchers) {
      setSelectedVouchers(JSON.parse(storedSelectedVouchers));
    }
  }, []);

  // Hàm lưu danh sách voucher vào localStorage
  const saveVouchersToLocalStorage = (updatedVouchers) => {
    setVouchers(updatedVouchers);
    localStorage.setItem("vouchers", JSON.stringify(updatedVouchers));
  };

  // Hàm lưu voucher từ API vào danh sách gốc
  const setVoucherList = (courseId, voucherList) => {
    const updatedVouchers = { ...vouchers, [courseId]: voucherList };
    saveVouchersToLocalStorage(updatedVouchers);
  };

  // Hàm chọn voucher và lưu vào localStorage
  const selectVoucher = (courseId, voucher) => {
    const updatedSelectedVouchers = {
      ...selectedVouchers,
      [courseId]: voucher,
    };
    setSelectedVouchers(updatedSelectedVouchers);
    localStorage.setItem(
      "selectedVouchers",
      JSON.stringify(updatedSelectedVouchers)
    );
  };

  // Hàm bỏ chọn voucher
  const clearSelectedVoucher = (courseId) => {
    setSelectedVouchers((prev) => {
      const newSelected = { ...prev };
      delete newSelected[courseId];
      localStorage.setItem("selectedVouchers", JSON.stringify(newSelected));
      return newSelected;
    });
  };

  return (
    <VoucherContext.Provider
      value={{
        vouchers,
        selectedVouchers,
        setVoucherList,
        selectVoucher,
        clearSelectedVoucher,
      }}
    >
      {children}
    </VoucherContext.Provider>
  );
};
