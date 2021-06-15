using ALISS.Organisation.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ALISS.WEBS.Controllers
{
    public class OrganisationController : Controller
    {
        // GET: Organisation
        public ActionResult Index(Guid id)
        {
            var orgService = new OrganisationService();
            var model = orgService.GetOrganisation(id);
            return View(model.data);
        }
    }
}