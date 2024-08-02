import { Resizable } from "re-resizable";

const ResizableDiv = ({ children }) => {
 
  return (
    <Resizable>
        {children}
    </Resizable>
  );
};

export default ResizableDiv;