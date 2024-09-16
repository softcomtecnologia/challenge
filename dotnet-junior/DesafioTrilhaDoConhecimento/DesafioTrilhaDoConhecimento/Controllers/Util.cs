using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioTrilhaDoConhecimento.Controllers
{
    public static class Util
    {
        internal static byte[] SetImageGetByteArray(Image image)
        {
            if (image == null)
                return null;

            var memory = new MemoryStream();

            image.Save(memory, ImageFormat.Bmp);

            var foto = memory.ToArray();

            return foto;
        }

        internal static Image SetByteArrayGetImage(byte[] byteArray)
        {
            if (byteArray == null)
                return null;

            var memory = new MemoryStream(byteArray);

            return Image.FromStream(memory);
        }
    }
}
