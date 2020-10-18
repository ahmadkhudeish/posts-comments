const applyChanges = <S, K extends keyof S>(state : S, changes : Pick<S, K>) : S =>
  Object.assign({}, state, changes);
  export default applyChanges;
