graph TD
    %% Input Layer
    A[Input Text Tokens<br><i>(batch, seq_len)</i>] --> B[Embedding Layer<br><i>vocab_size → embed_dim=128</i>]
    
    %% TextAgent
    B --> C[LSTM<br><i>embed_dim=128 → shared_dim=64</i>]
    C --> D[Shared Representation<br><i>(batch, seq_len, shared_dim=64)</i>]
    
    %% Task-Specific Heads
    D --> E1[Head 0: Language Modeling<br><i>Linear(shared_dim=64 → vocab_size)</i><br><i>CrossEntropyLoss</i>]
    D --> E2[Head 1: Sentiment Analysis<br><i>Linear(shared_dim=64 → 2)</i><br><i>CrossEntropyLoss</i>]
    D --> E3[Head 2: Masked Language Modeling<br><i>Linear(shared_dim=64 → vocab_size)</i><br><i>CrossEntropyLoss</i>]
    D --> E4[Head 3: Sequence Length Prediction<br><i>Linear(shared_dim=64 → 1)</i><br><i>MSELoss</i>]
    D --> E5[Head 4: Syntax Checking<br><i>Linear(shared_dim=64 → 2)</i><br><i>CrossEntropyLoss</i>]
    
    %% TemporalConsciousness
    D --> F[TemporalConsciousness]
    F --> G[MultiheadAttention<br><i>shared_dim=64, 4 heads</i>]
    G --> H[Residual Connection + LayerNorm<br><i>(batch, seq_len, shared_dim=64)</i>]
    H --> I[Feed-Forward Network<br><i>Linear(64 → 256) → ReLU → Linear(256 → 64)</i>]
    I --> J[Residual Connection + LayerNorm<br><i>(batch, seq_len, shared_dim=64)</i>]
    J --> K[MultiheadAttention<br><i>shared_dim=64, 4 heads</i>]
    K --> L[Residual Connection + LayerNorm<br><i>(batch, seq_len, shared_dim=64)</i>]
    
    %% SequenceHivemind
    L --> M[SequenceHivemind]
    M --> N[Conv1D<br><i>in_channels=64, out_channels=64, kernel=3, padding=1, groups=64</i>]
    N --> O[Attention Pooling<br><i>Linear(64 → 1)</i>]
    O --> P[Global State<br><i>(batch, num_agents=5, shared_dim=64)</i>]
