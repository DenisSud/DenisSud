# Denis Sud

Machine Learning Engineer specializing in Deep Learning and Large Language Models

## About Me

I'm a student at **MSU**. My passion for artificial intelligence began at age 15. Having spent years studying ML/AI through both self-directed learning and formal education (including Stanford CS229, CS230, CS25 and Harvard CS50 AI), my research focuses on advanced deep learning techniques, particularly in language modeling.

## Education
**Moscow State University (MSU)**  
*Faculty of Physics*

**Additional Education**  
- **Stanford University (online):**  
  - [CS229: Machine Learning](https://cs229.stanford.edu/) - Fundamental algorithms (SVM, PCA, HMM) and implementation  
  - [CS230: Deep Learning](https://cs230.stanford.edu/) - CNN/RNN/GAN architectures and hyperparameter optimization  
  - [CS25: Transformers Architecture](https://web.stanford.edu/class/cs25/) - Attention mechanisms and hardware adaptation  
- **Harvard University (online):**  
  - [CS50: Computer Science](https://pll.harvard.edu/course/cs50-introduction-computer-science) - Algorithms and data structures  
  - [CS50AI: AI with Python](https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python) - Problem solving, optimization, knowledge representation  

## Professional Experience
**Lead Engineer | MADIZ Project (Satellite Systems)**  
*Developed atmospheric monitoring system with full data processing cycle*  
- Designed custom sensors (Raspberry Pi/Arduino) reducing system cost by 80%  
- Built data pipeline with multi-layer compression (12 Mbps bandwidth)  
- Implemented fault-tolerant architecture with hot-swap modules (99.8% uptime in stratospheric conditions)  
- Integrated Rust (no_std) for performance-critical signal processing  

**Autonomous Navigation Systems Engineer**  
*Full-stack navigation solution for robots in dynamic environments*  
- Developed multi-modal fusion pipeline (Lidar + RealSense) reducing localization error by 22% using DL calibration  
- Trained YOLOv7 model for semantic segmentation (94.3% mAP on 15K industrial scenes)  
- Created hybrid path planning algorithm (A* + RRT*) with dynamic obstacle avoidance  
- Optimized ROS2 stack for NVIDIA Jetson TX2 (<25 ms latency)  

## Technical Expertise

### Core Technologies
- **Deep Learning**: PyTorch-Lightning, PyTorch, Transformers, vLLM, Unsloth
- **Language Models**: LLM fine-tuning, multi-agent systems, quantization, RAG
- **ML Infrastructure**: Distributed training, optimization, deployment, MLOps

### Languages
- Python (Primary): ML and Data Science
- Go: High-performance backend systems
- Rust: Embedded systems & performance-critical components

### Specialized Skills
- **Low-Level Optimization**: SIMD (AVX2/NEON), lock-free allocators, bit-packing  
- **Embedded Systems**: RTOS (FreeRTOS), sensor fusion, device drivers, energy-efficient computing  
- **ML Efficiency**: Model quantization (GGUF/NF4), distillation, mixed precision  

## Featured Projects

### GGUF-LLMS | Rust · SIMD · Quantization | [GitHub](https://github.com/DenisSud/gguf-llms)  
*High-performance GGUF parser for efficient LLM inference*  
- Zero-copy mmap parser (1.5s load for 7B models)  
- Cache-aligned allocator (+17% attention throughput)  
- SIMD FP16→FP32 conversion pipeline (AVX2/FMA)  
- 4-bit NF4 weights with 4.8x compression and runtime decompression  

### PaperTuner | Python · LLM Fine-tuning | [GitHub](https://github.com/DenisSud/papertuner)  
*Research assistant creation from scientific papers*  
- QA-pair extraction pipeline (96%+ accuracy on 1,288 papers)  
- 3.2x faster fine-tuning via vLLM + Unsloth  
- QLoRA adaptation for 6GB GPU operation  
- 2,528 technical Q&A dataset across 150+ domains  

### RAG Pipeline | Python · Qdrant · Ollama | [GitHub](https://github.com/DenisSud/RAG-agent)  
*Hybrid Q&A system for corporate documents*  
- Multi-stage retrieval: sparse → dense → re-ranking (89% accuracy)  
- Adaptive chunking with semantic segmentation  
- Confidence scoring with temperature calibration (+28% coherence)  
- Chain-of-verification for hallucination reduction  

### AI Support Agent | Python · LLM Tooling | [GitHub](https://github.com/DenisSud/partner-ai)  
*Privacy-focused context-aware assistant*  
- Multi-task emotion analysis (valence/arousal/dominance) with fine-tuned BERT (85% acc)  
- Markdown-based knowledge graph with RAG auto-updates  
- RBAC with OAuth2 and tenant data isolation  
- 4.7/5 CSAT on 50k+ simulated dialogues  

## Connect

[GitHub](https://github.com/DenisSud/) | t.me/DenisSud2 | sudakov.denis.2007@gmail.com

I'm interested in collaborating on research projects involving LLMs or novel deep learning applications. Feel free to reach out for technical discussions or potential collaborations.
