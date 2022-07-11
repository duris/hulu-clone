import {AnnotationIcon} from "@heroicons/react/solid"

function ChatBox() {
  return (
    <a href="#" className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div className="flex items-center space-x-3">
    <AnnotationIcon className="h-6 w-6 stroke-black group-hover:stroke-white" fill="none" viewBox="0 0 20 20"/>
    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
      
  )
}

export default ChatBox