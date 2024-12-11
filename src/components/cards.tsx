import React from 'react';

const ColorFontPalette = () => {
  const colors = [
    { name: 'Pink', hex: '#FB2E86' },
    { name: 'Navy Blue', hex: '#FB2E86' },
    { name: 'Purple', hex: '#FB2E86' },
    { name: 'Off Purple', hex: '#FB2E86' },
    { name: 'Red', hex: '#FB2E86' },
    { name: 'Sky Blue', hex: '#FB2E86' },
    { name: 'Blue', hex: '#FB2E86' },
    { name: 'Pantone Purple', hex: '#FB2E86' },
    { name: 'Off Blue', hex: '#FB2E86' },
  ];

  const fonts = [
    { name: 'Josefin Sans', description: 'Full Typeface' },
    { name: 'Lato', description: 'Regular' },
  ];

  return (
    <section className="container mx-auto px-5 py-10">
      <div className="border border-blue-200 rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Color Section */}
          <div className="col-span-2 md:col-span-3">
            <h2 className="text-lg font-bold mb-4">Color</h2>
            <div className="grid grid-cols-3 gap-4">
              {colors.map((color, index) => (
                <div key={index} className="p-4 border rounded-lg text-center">
                  <div
                    className="w-full h-20 rounded-lg mb-3"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <p className="text-sm font-semibold">{color.name}</p>
                  <p className="text-xs text-gray-500">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Font Section */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-bold mb-4">Font</h2>
            <div className="space-y-4">
              {fonts.map((font, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg text-center flex flex-col items-center"
                >
                  <p className="text-3xl" style={{ fontFamily: font.name }}>
                    Aa
                  </p>
                  <p className="text-sm font-semibold">{font.name}</p>
                  <p className="text-xs text-gray-500">{font.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorFontPalette;
