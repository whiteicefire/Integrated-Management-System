/*
export function someMutation (state) {
}
*/
export const updateTabsState = (state, view) => {
    
    if(state.tabs.some(v => v.path === view.path)) return
    state.tabs.push(view)

  }
export const deleteTabsState = (state, view) => {
    
    for (const i of state.tabs) {
      if (i === view) {
        const index = state.tabs.indexOf(i)
        state.tabs.splice(index, 1)
        break
      }
    }

  }