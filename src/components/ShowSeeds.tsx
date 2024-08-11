"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ShowSeeds({ seeds }: { seeds: string[] }) {
  return (
    <Card className=" bg-zinc-900 border-none text-white shadow-lg md:w-1/2">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center mb-4">
          Seed Collection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {seeds.map((seed, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Badge className="w-full py-2 px-3 text-sm font-medium bg-zinc-700 transition-colors duration-200 ease-in-out">
                {seed}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
