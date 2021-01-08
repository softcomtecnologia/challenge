using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KnowledgeTrail
{
    public static class Util_Convert
    {
        public static Image ByteArrayToImage(byte[] b)
        {
            MemoryStream memory = new MemoryStream(b);
            Image img = Image.FromStream(memory);
            return img;
        }
    }
}
