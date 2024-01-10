import FluxMethods from "./enum/FluxMethods.mjs";

export default class FluxRequest {
  "url-External";
  "header-External"= {
    headers: { "Content-Type": "application/json", 
    Accept: "application/json" },
    method: "GET",
    body : null

  };

  constructor(...configs) {
      this["url-External"] = configs[0];
      this["header-External"].method = configs[1]
      this["header-External"].body = JSON.stringify(configs[2])
      if(this["header-External"].method === undefined) this["header-External"].method = "GET"
  }
    


  async fluxFetch(){
    console.log(this["header-External"])
    return await fetch(this["url-External"],this["header-External"]).then(promise => promise.json());
  }
  statusRequest(){
    const status = {
        url : this["url-External"],
        header : this["header-External"]
      }
      return status;

  }
  
}
