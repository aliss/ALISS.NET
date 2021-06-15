using ALISS.Services.ViewModels.Search;
using System;
using System.IO;
using System.Net;
using System.Text;
using System.Web.Script.Serialization;

namespace ALISS.Search.Services
{
    public class SearchService
    {
        //private const string _servSearch = "https://testing-aliss.herokuapp.com/api/v4/services/?postcode=";
        private const string _servSearch = "https://www.aliss.org/api/v4/services/?postcode=";

        public SearchAPIModel GetSearch(SearchInputModel input)
        {
            StringBuilder SB = new StringBuilder();

            var postcode = input.Postcode;

            SB.Append(postcode);

            if (String.IsNullOrEmpty(input.Query) == false)
            {
                SB.Append("&q=" + input.Query);
            }

            if (input.Page != null)
            {
                SB.Append("&page=" + input.Page.Value);
            }

            if (input.LocationType != null)
            {
                SB.Append("&location_type=" + input.LocationType);
            }

            if (input.Category != null)
            {
                SB.Append("&category=" + input.Category);
            }

            if (input.Radius != null && input.Radius.Value > 0)
            {
                SB.Append("&radius=" + input.Radius.Value);
            }

            if (input.Radius != null && input.Radius.Value == 0)
            {
                SB.Append("&radius=" + input.CustomRadius.Value);
            }

            //if (String.IsNullOrEmpty(input.Sort) == false)
            //{
            //    SB.Append("&sort=" + input.Sort);
            //}

            var request = (HttpWebRequest)WebRequest.Create(_servSearch + SB.ToString());
            using (var response = (HttpWebResponse)request.GetResponse())
            {
                using (var reader = new StreamReader(response.GetResponseStream()))
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var objText = reader.ReadToEnd();
                    var model = (SearchAPIModel)js.Deserialize(objText, typeof(SearchAPIModel));

                    return model;
                }
            }
        }
    }
}
