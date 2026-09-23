"use client";

import { useStore } from "@/store/useStore";
import { CheckCircle2, Info, X } from "lucide-react";

export default function ToastNotification() {
  const toast = useStore((state) => state.toast);
  const hideToast = useStore((state) => state.hideToast);

  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-slide-up bg-white/95 backdrop-blur-md border border-cream-300 rounded-xl shadow-xl shadow-charcoal-900/5 p-4 flex items-center gap-3 transition-all"
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
          isSuccess ? "bg-sage-100 text-sage-700" : "bg-terracotta-100 text-terracotta-600"
        }`}
      >
        {isSuccess ? <CheckCircle2 className="w-5 h-5" /> : <Info className="w-5 h-5" />}
      </div>
      <div className="flex-1 text-sm font-medium text-charcoal-800">
        {toast.message}
      </div>
      <button
        onClick={hideToast}
        aria-label="Dismiss notification"
        className="text-charcoal-400 hover:text-charcoal-700 p-1 rounded-lg transition-colors focus-ring"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
