using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ALISS.WEBS.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [ActionName("privacy-policy")]
        public ActionResult PrivacyPolicy()
        {
            ViewBag.Message = "Your contact page.";

            return View("PrivacyPolicy");
        }

        [ActionName("terms-and-conditions")]
        public ActionResult TermsAndConditions()
        {
            ViewBag.Message = "Your contact page.";

            return View("TermsAndConditions");
        }
    }
}