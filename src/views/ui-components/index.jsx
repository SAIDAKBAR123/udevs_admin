import { useHistory } from "react-router-dom";
import Wrapper from "../../components/Template/index";
import DataTable from "../../components/DataTable/index";
export default function App() {
  const history = useHistory();
  console.log(history);
  return (
    <Wrapper header="UI component">
      <DataTable dataSource={[]} columns={[]} pagination={"10"} />
    </Wrapper>
  );
}
