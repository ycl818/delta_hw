import Card from "../components/Card/Card";
import CardSmall from "../components/CardSmall/CardSmall";
import { BarData, BarOptions, GeoData, SankeyData } from "../utils/data";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

import "./pageStyles/SummarizePage.scss";
import DateSelector from "../components/DateSelector/DateSelector";

const SummarizePage = () => {
  return (
    <div>
      <div className="summarizePage__flex">
        <DateSelector />
        <button className="summarizePage__exportBtn">Export</button>
      </div>

      <div className="summarizePage__group0">
        <CardSmall
          cardTitle={"平均月轉供電量"}
          value={"kWh 111,019"}
          bodyIcon={<AiOutlineArrowDown />}
          bodyValue={"5.9%"}
          footerText={"過去一個月"}
          footerValue={"110,105 M"}
          isRaise={false}
        />
        <CardSmall
          cardTitle={"平均月用電量"}
          value={"kWh 105,468"}
          bodyIcon={<AiOutlineArrowDown />}
          bodyValue={"0.5%"}
          footerText={"過去一個月"}
          footerValue={"110,241"}
          isRaise={false}
        />

        <CardSmall
          cardTitle={"總轉供電量"}
          value={"kWh 666,117"}
          bodyIcon={<AiOutlineArrowUp />}
          bodyValue={"1.2%"}
          footerText={"過去一個月"}
          footerValue={"97697"}
          isRaise={true}
        />
        <CardSmall
          cardTitle={"總用電量"}
          value={"kWh 880554"}
          bodyIcon={<AiOutlineArrowDown />}
          bodyValue={"2%"}
          footerText={"過去一個月"}
          footerValue={"146,759"}
          isRaise={false}
        />
      </div>
      <div className="summarizePage__group1">
        <Card
          width={"calc(45%)"}
          height={300}
          cardTitle={"月結轉供電量"}
          chartType={"Sankey"}
          chartHeight={200}
          data={SankeyData}
        />
        <div className="summarizePage__group1-2">
          <Card
            width={"calc(22.5%)"}
            height={300}
            cardTitle={"總餘電率 %"}
            chartType={"guageCircle"}
            footerLabel={"總供電量: 666.117kWh"}
            guageValue={10.8}
            guageColor={"#5FA3F8"}
          />
          <Card
            width={"calc(22.5%)"}
            height={300}
            cardTitle={"總 RE %"}
            chartType={"guageCircle"}
            footerLabel={"總用電: 880,554kWh"}
            guageValue={88.9}
            guageColor={"#49DE80"}
          />
        </div>
      </div>
      <div className="summarizePage__group2">
        <Card
          width={"calc(45%)"}
          height={300}
          cardTitle={"綠色分析"}
          chartType={"Bar"}
          chartHeight={200}
          data={BarData}
          options={BarOptions}
          icon={true}
        />

        <Card
          width={"calc(45%)"}
          height={300}
          cardTitle={"全球綠電"}
          chartType={"GeoChart"}
          chartHeight={200}
          data={GeoData}
          icon={true}
        />
      </div>
    </div>
  );
};

export default SummarizePage;
