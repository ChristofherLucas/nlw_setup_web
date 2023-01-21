import { generateDatesRangeFromYearBeginning } from "../utils/GenerateDatesRangeFromYearBeginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const sumaryDates = generateDatesRangeFromYearBeginning();
const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - sumaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl w-10 h-10  font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {sumaryDates.map((date) => {
          return <HabitDay key={date.toString()} />;
        })}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
                key={i}
              ></div>
            );
          })}
      </div>
    </div>
  );
}
