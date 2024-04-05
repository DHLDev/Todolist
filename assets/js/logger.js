export default function Logger(reducer){
      return (PrevState,action,args) => {
            const Nextstate = reducer(PrevState,action,args)
            return Nextstate
      }
}