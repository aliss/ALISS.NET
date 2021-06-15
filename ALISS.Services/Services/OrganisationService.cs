using ALISS.Services.ViewModels.Organisation;
using System;
using System.IO;
using System.Net;
using System.Web.Script.Serialization;

namespace ALISS.Organisation.Services
{
    public class OrganisationService
    {
        //private const string _orgUrl = "https://testing-aliss.herokuapp.com/api/v4/organisations/";
        private const string _orgUrl = "https://www.aliss.org/api/v4/organisations/";

        public OrganisationAPIModel GetOrganisation(Guid id)
        {
            var request = (HttpWebRequest)WebRequest.Create(_orgUrl + id);
            using (var response = (HttpWebResponse)request.GetResponse())
            {
                using (var reader = new StreamReader(response.GetResponseStream()))
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var objText = reader.ReadToEnd();
                    var model = (OrganisationAPIModel)js.Deserialize(objText, typeof(OrganisationAPIModel));

                    return model;
                }
            }
        }
    }
}
