using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using RestSharp;
using RestSharp.Deserializers;

namespace WeatherAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {

        public WeatherController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public IActionResult GetWeather(WeatherRequestDTO weatherRequest)
        {
            var latitude = weatherRequest.Latitude;
            var longitude = weatherRequest.Longitude;
            var key = Configuration.GetValue<string>("DarkSky:Key");
            var client = new RestClient("https://api.darksky.net/forecast");
           
            var request = new RestRequest($"{key}/{latitude},{longitude}", Method.GET);
            request.AddParameter("exclude", "minutely,flags", ParameterType.QueryString);
            IRestResponse response = client.Execute(request);
            var result = response.Content;
            JObject weather = JObject.Parse(result);
             

            return Ok(weather);
        }
    }
}