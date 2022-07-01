


export const addition = (a, b)=> a + b;

export const substraction = (a, b) => a > b ? a - b: b - a;

export const multiplication = (a, b) => a * b;

/**
 * It could be a jsx component There we could have all the properties defined 
 * and the child element passed ad children prop
 * ex:-
 * <CalculatorContext.Provider
      value={{
        addition,
        division,
        firstNumber,
        updateSecondNumber,
      }}
    >
      {children}
    </CalculatorContext.Provider>
 */