export type Action<T, P = void> = {
  type: T;
  payload?: P;
};
/* Declares a TypeScript type alias named Action. 
  It's a generic type that takes two type parameters: T and P. T represents the type of the action's 
  type property, and P represents the type of the action's payload property, which defaults to void if not provided.

  type: T;: Inside the Action type, this line declares a property type with the type T. This property is 
  intended to hold a string value representing the type of the action.

  payload?: P;: Inside the Action type, this line declares an optional property payload with the type P. 
  This property is intended to hold additional data associated with the action. */

export const createAction = <T extends string, P = void>(
  /* The function is also generic, with type parameters T and P. T is constrained to string, 
  meaning it must be a string type, and P defaults to void, meaning if P is not specified, 
  it is considered to be void. */
  type: T,
  payload?: P
): Action<T, P> => ({ type, payload });

/*  It returns an object with properties type and payload. The type property is assigned the 
  value of the type parameter, and the payload property is assigned the value of the payload 
  parameter. The return type of the function is Action<T, P>, where T represents the type of 
  the action and P represents the type of the payload. */

