using ALISS.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ALISS.WEBS.Controllers
{
    public class ServiceController : Controller
    {
        // GET: Organisation
        public ActionResult Index(Guid id)
        {
            var serviceService = new ServiceService();
            var model = serviceService.GetService(id);
            return View(model.data);
        }
    }
}