export const clickCell = (cell) => {
  return {
    type: 'CLICK_CELL',
    cell
  }
}


export const solved = (arr) => {
  return {
    type: "SOLVED",
    one: arr[0],
    two: arr[1]
  }
}

export const notSolved = () => {
  return {
    type: "NOT_SOLVED"
  }
}

export const timeout = () => {
  return {
    type: 'TIMEOUT'
  }
}
