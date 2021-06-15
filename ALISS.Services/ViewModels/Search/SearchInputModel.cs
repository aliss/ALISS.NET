using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALISS.Services.ViewModels.Search
{
    public class SearchInputModel
    {
        public string Postcode { get; set; }
        public string Category { get; set; }
        public string Placename { get; set; }
        public string Query { get; set; }
        public string LocationType { get; set; }
        public int? Radius { get; set; }
        public int? CustomRadius { get; set; }
        public int? Page { get; set; }
        //public string Sort { get; set; }
    }
}
