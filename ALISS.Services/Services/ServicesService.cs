using ALISS.Services.ViewModels.Service;
using System;
using System.IO;
using System.Net;
using System.Web.Script.Serialization;

namespace ALISS.Services.Services
{
    public class ServiceService
    {
        //private const string _servUrl = "https://testing-aliss.herokuapp.com/api/v4/services/";
        private const string _servUrl = "https://www.aliss.org/api/v4/services/";

        public ServiceAPIModel GetService(Guid id)
        {
            var request = (HttpWebRequest)WebRequest.Create(_servUrl + id);
            using (var response = (HttpWebResponse)request.GetResponse())
            {
                using (var reader = new StreamReader(response.GetResponseStream()))
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var objText = reader.ReadToEnd();
                    var model = (ServiceAPIModel)js.Deserialize(objText, typeof(ServiceAPIModel));

                    return model;
                }
            }
        }
    }
}
