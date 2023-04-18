import { useState } from "react";

export const LightsOut = (props) => {
  const [answer, setAnswer] = useState("");
  const handleChange = (event) => {
    setAnswer(event.target.value);
  };
  const handleAnswer = () => {
    const userAnswer = answer;
  };
console.log(props)
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center text-xl rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  1
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Questions on important JS concepts
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{props.question}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex m-5">
              <div class="flex flex-col space-y-2">
                {props.choices.map((choice, index) => (
                    
                  <label
                    class="inline-flex items-center"
                    key={index}
                  >{console.log(choice)}
                    <input
                      type="radio"
                      class="form-radio"
                      name="answer"
                      value={choice}
                      checked={props.answer === choice}
                      onChange={handleChange}
                    />
                    <span class="ml-2">{choice}</span>
                  </label>
                ))}
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={props.modalChange}
                disabled={!answer}
              >
                Lock answer
              </button>
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={props.modalChange}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
