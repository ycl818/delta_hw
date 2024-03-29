import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineRestore } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import "./pageStyles/SummarizePage.scss";
import CardWithIcon from "../components/CardWithIcon/CardWithIcon";
import Card from "../components/Card/Card";
import { BarData, BarOptions, ComposeData } from "../utils/data";
import BasicTable from "../components/Table/BasicTable";
import CardGreenPowerSummarize from "../components/CardGreenPowerSummarize/CardGreenPowerSummarize";

const SummarizePage = () => {
  return (
    <>
      <div className="summarizePage__group1">
        <CardWithIcon
          cardIcon={<MdOutlineShoppingCartCheckout />}
          bodyTitle={"年轉供電量"}
          bodyBigValue={"kWh 1,332,234"}
          isRaise={true}
          bodyValue={"12%"}
          bodyIcon={<AiOutlineArrowUp />}
          iconColor={"#FFFAE9"}
          iconFontColor={"#f4be50"}
        />
        <CardWithIcon
          cardIcon={<MdAttachMoney />}
          bodyTitle={"年總用電量"}
          bodyBigValue={"kWh 1,761,109"}
          isRaise={true}
          bodyValue={"35%"}
          bodyIcon={<AiOutlineArrowUp />}
          iconColor={"#E9F5FF"}
          iconFontColor={"#0061f4"}
        />
        <CardWithIcon
          cardIcon={<MdOutlineRestore />}
          bodyTitle={"餘電電費"}
          bodyBigValue={"$333,058"}
          isRaise={false}
          bodyValue={"-5%"}
          bodyIcon={<AiOutlineArrowDown />}
          iconColor={"#FCF0F5"}
          iconFontColor={"#ed509d"}
        />
        <CardWithIcon
          cardIcon={<RiMoneyDollarCircleLine />}
          bodyTitle={"成本"}
          bodyBigValue={"$6,661,170"}
          isRaise={true}
          bodyValue={"12%"}
          bodyIcon={<AiOutlineArrowUp />}
          iconColor={"#F4FAFA"}
          iconFontColor={"#43a7ff"}
        />
      </div>
      <div className="summarizePage__group2">
        <Card
          width={"calc(60%)"}
          height={300}
          cardTitle={"Power Mix (kW)"}
          chartType={"composeChart"}
          chartHeight={200}
          data={ComposeData}
          // options={BarOptions}
          icon={true}
        />
        <Card
          width={"calc(30%)"}
          height={300}
          cardTitle={"轉供電量"}
          chartType={"Bar"}
          chartHeight={200}
          data={BarData}
          options={BarOptions}
          icon={false}
        />
      </div>

      <div className="summarizePage__group3">
        <div className="summarizePage__group3-eletricData">
          <BasicTable />
        </div>
        <div className="summarizePage__group3-greenPowerSummarize">
          <CardGreenPowerSummarize />
        </div>
      </div>
    </>
  );
};

export default SummarizePage;
