using ALISS.Search.Services;
using ALISS.Services.ViewModels.Search;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ALISS.WEBS.Controllers
{
    public class SearchController : Controller
    {
        // GET: Organisation
        public ActionResult Index(SearchInputModel input)
        {

            var orgService = new SearchService();
            var model = orgService.GetSearch(input);
            var viewModel = new SearchViewModel(input);
            viewModel.SearchModel = model;

            return View(viewModel);
        }

    }
}