import { useState } from "react"
import Accordion from "../../components/Accordion"

export default function Accordions () {
  const [expand, setExpand] = useState(true)

  return (
    <div className="bg-white h-full rounded">

      {/* ************ FILLED ************ */}
      <h1 className="text-center">Filled</h1><hr />
      <div className="flex">
        <div className="w-1/3 p-2">
          <h2>Small</h2>
          <Accordion
            expanded={expand}
            filled
            size="small"
            summary={"Accordion"}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
            onChange={val => setExpand(val)}
          />
        </div>
        <div className="w-1/3 p-2">
          <h2>Medium</h2>
          <Accordion
            id="medium"
            filled
            size="medium" 
            summary="Accordion"
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
            onChange={(val, key) => console.log(val, key)}
          />
        </div>
        <div className="w-1/3 p-2">
          <h2>Large</h2>
          <Accordion 
            size="large" 
            filled
            summary={<><span>Accor</span><span className="ml-4">Dion</span></>}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/3 p-2">
          <Accordion
            filled
            border="top"
            size="small"
            summary={"Accordion"}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion
            id="medium"
            filled
            border="bottom"
            size="medium" 
            summary="Accordion"
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
            onChange={(val, key) => console.log(val, key)}
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion 
            size="large" 
            filled
            border="both"
            summary={<><span>Accor</span><span className="ml-4">Dion</span></>}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/3 p-2">
          <Accordion
            filled
            disabled
            size="small"
            summary={"Accordion"}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion
            id="medium"
            filled
            disabled
            size="medium" 
            summary="Accordion"
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
            onChange={(val, key) => console.log(val, key)}
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion 
            size="large" 
            filled
            disabled
            summary={<><span>Accor</span><span className="ml-4">Dion</span></>}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/3 p-2">
          <Accordion
            filled
            size="small"
            summary={"Accordion"}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion
            id="medium"
            filled
            weight="bolder"
            size="medium" 
            summary="Accordion"
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
            onChange={(val, key) => console.log(val, key)}
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion 
            size="large" 
            filled
            weight="bold"
            summary={<><span>Accor</span><span className="ml-4">Dion</span></>}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
      </div>

      {/* ******** SIMPLE ******** */}
      <h1 className="text-center mt-2">Simple</h1><hr />
      <div className="flex">
        <div className="w-1/3 p-2">
          <Accordion
            size="small"
            summary={"Accordion"}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion
            id="medium"
            size="medium" 
            summary="Accordion"
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
            onChange={(val, key) => console.log(val, key)}
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion 
            size="large" 
            summary={<><span>Accor</span><span className="ml-4">Dion</span></>}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/3 p-2">
          <Accordion
            border="top"
            size="small"
            summary={"Accordion"}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion
            id="medium"
            border="bottom"
            size="medium" 
            summary="Accordion"
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
            onChange={(val, key) => console.log(val, key)}
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion 
            size="large" 
            border="both"
            summary={<><span>Accor</span><span className="ml-4">Dion</span></>}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/3 p-2">
          <Accordion
            size="small"
            disabled
            summary={"Accordion"}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion
            id="medium"
            disabled
            size="medium" 
            summary="Accordion"
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
            onChange={(val, key) => console.log(val, key)}
          />
        </div>
        <div className="w-1/3 p-2">
          <Accordion 
            size="large" 
            disabled
            summary={<><span>Accor</span><span className="ml-4">Dion</span></>}
            details="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
      </div>
    </div>
  )
}