using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using RestSharp;
using System.Net;

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
        [HttpPost]
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
        [HttpGet]
        public ContentResult LifeCheck()
        {
            return new ContentResult
            {
                ContentType = "text/html",
                StatusCode = (int)HttpStatusCode.OK,
                Content = "<html>" +
                "<body><h1 style='color:darkgreen; text-align: center; padding: 3rem; border: 1px solid gray; font-family: Arial, sans-serif'>The Weather API is Alive.</h1></body></html>"
            };
        }
    }
}
