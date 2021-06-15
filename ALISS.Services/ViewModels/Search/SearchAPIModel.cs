using ALISS.Services.ViewModels.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace ALISS.Services.ViewModels.Search
{
    public class SearchAPIModel
    {
        public int count { get; set; }
        public string next { get; set; }
        public string previous { get; set; }
        public IEnumerable<ServiceModel> data { get; set; }

    }
}
