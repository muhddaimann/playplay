import React, { createContext, useContext, useState, ReactNode } from "react";
import { View } from "react-native";
import { Toast } from "../src/ui/components/toast";
import { Modal } from "../src/ui/components/modal";

interface ToastOptions {
  message: string;
  type?: "info" | "success" | "error" | "warning";
  duration?: number;
}

interface ModalOptions {
  title: string;
  message?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface NotificationContextType {
  showToast: (options: ToastOptions) => void;
  showModal: (options: ModalOptions) => void;
  hideModal: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastOptions | null>(null);
  const [modal, setModal] = useState<ModalOptions | null>(null);

  const showToast = (options: ToastOptions) => {
    setToast(options);
  };

  const showModal = (options: ModalOptions) => setModal(options);
  const hideModal = () => setModal(null);

  return (
    <NotificationContext.Provider value={{ showToast, showModal, hideModal }}>
      {children}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onHide={() => setToast(null)}
        />
      )}
      {modal && (
        <Modal
          visible
          title={modal.title}
          message={modal.message}
          onConfirm={() => {
            modal.onConfirm?.();
            hideModal();
          }}
          onCancel={hideModal}
        />
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error("useNotification must be used within NotificationProvider");
  return context;
};