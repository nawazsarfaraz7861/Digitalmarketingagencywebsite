import { motion } from 'motion/react';

export function ClientLogos() {
  // Placeholder clients - you can replace these with actual client logos later
  const clients = [
    { name: 'LinkedIn', logo: '🔗' },
    { name: 'YouTube', logo: '▶️' },
    { name: 'Netflix', logo: 'N' },
    { name: 'Spotify', logo: '🎵' },
    { name: 'Amazon', logo: 'A' },
    { name: 'Microsoft', logo: 'M' },
    { name: 'Adobe', logo: 'Ae' },
    { name: 'Slack', logo: '#' },
    { name: 'Dropbox', logo: '📦' },
    { name: 'Shopify', logo: 'S' },
  ];

  return (
    <section className="py-16 bg-white border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground">
            Trusted by leading brands worldwide
          </p>
        </motion.div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: '120px' }}
            >
              <motion.div 
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl hover:bg-red-100 transition-colors">
                  {client.logo}
                </div>
                <span className="text-sm text-muted-foreground">{client.name}</span>
              </motion.div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: '120px' }}
            >
              <motion.div 
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl hover:bg-red-100 transition-colors">
                  {client.logo}
                </div>
                <span className="text-sm text-muted-foreground">{client.name}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}