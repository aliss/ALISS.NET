using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALISS.Services.ViewModels.Search
{
    public class SearchViewModel
    {
        public SearchViewModel(SearchInputModel input)
        {
            Query = input.Query;    
            Postcode = input.Postcode;
            Category = input.Category;
            Placename = input.Placename;
            LocationType = input.LocationType;
            Radius = input.Radius ?? 10000;
            CustomRadius = input.CustomRadius ?? 10000;
            Page = input.Page ?? 1;

            //Sort = input.Sort;

        }
        public SearchAPIModel SearchModel { get; set; }
        public string Postcode { get; set; }
        public string Category { get; set; }
        public string Placename { get; set; }
        public string Query { get; set; }
        public string LocationType { get; set; }
        public int Radius { get; set; }
        public int CustomRadius { get; set; }
        public int Page { get; set; }
        //public string Sort { get; set; }

    }
}
