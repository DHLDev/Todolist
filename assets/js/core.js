export default function html([first, ...string],...values){
      return values.reduce(
            (acc,cur) => acc.concat(cur,string.shift()),
            [first]
      )
      .filter(x => x && x !== true || x === 0)
      .join('')
}

export function CreatStore(reducer){
      let state = reducer()
      const run = new Map()

      function RenderHTML(){
            for(const [root,component] of run){
                  const output = component()
                  root.innerHTML = output
            }
      }

      return {
            attach(component,root){
                  run.set(root,component)
                  RenderHTML()
            },
            connect(selector = state => state){
                  return component => (prop,...args) => 
                        component(Object.assign({},prop,selector(state),...args))
            },
            dispatch(action,...args){
                  state = reducer(state,action,...args)
                  RenderHTML()
            }
      }
}