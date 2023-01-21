import logoImage from "../assets/logoImage.svg";
import { Plus } from "phosphor-react";

export function Header() {
  return (
    <div className="w-full max-w-3xl max-auto flex items-center justify-between">
      <img src={logoImage} alt="" />
      <button
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex intems-center gap-3 hover:border-violet-300"
        type="button"
      >
        <Plus className="text-violet-500" size={20} />
        Novo hábito
      </button>
    </div>
  );
}
