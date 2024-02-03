import Card from "../components/Card/Card";
import CardSmall from "../components/CardSmall/CardSmall";
import { BarData, BarOptions, GeoData, SankeyData } from "../utils/data";
import { BsArrowDownShort } from "react-icons/bs";

const SummarizePage = () => {
  return (
    <div>
      SummerizePage
      <div className="summarizePage__group0">
        <CardSmall
          cardTitle={"平均月轉供電量"}
          value={"kWh 111,019"}
          bodyIcon={<BsArrowDownShort />}
          bodyValue={"5.9%"}
          footerText={"過去一個月"}
          footerValue={"110,105 M"}
        />
        <CardSmall
          cardTitle={"平均月轉供電量"}
          value={"kWh 111,019"}
          bodyIcon={<BsArrowDownShort />}
          bodyValue={"5.9%"}
          footerText={"過去一個月"}
          footerValue={"110,105 M"}
        />

        <CardSmall
          cardTitle={"平均月轉供電量"}
          value={"kWh 111,019"}
          bodyIcon={<BsArrowDownShort />}
          bodyValue={"5.9%"}
          footerText={"過去一個月"}
          footerValue={"110,105 M"}
        />
        <CardSmall
          cardTitle={"平均月轉供電量"}
          value={"kWh 111,019"}
          bodyIcon={<BsArrowDownShort />}
          bodyValue={"5.9%"}
          footerText={"過去一個月"}
          footerValue={"110,105 M"}
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
            cardTitle={"總於電率 %"}
            chartType={"guageCircle"}
          />
          <Card
            width={"calc(22.5%)"}
            height={300}
            cardTitle={"總 RE %"}
            chartType={"guageCircle"}
          />
        </div>
      </div>
      <div className="summarizePage__group2">
        <Card
          width={"calc(49%)"}
          height={300}
          cardTitle={"綠色分析"}
          chartType={"Bar"}
          chartHeight={200}
          data={BarData}
          options={BarOptions}
          icon={true}
        />

        <Card
          width={"calc(49%)"}
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
